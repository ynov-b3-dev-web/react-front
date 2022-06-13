# Front-end - ReactJS

## Démarrage

Avec [create-react-app](https://create-react-app.dev/) :

```bash
# changer nom-app par le nom du dossier qui sera créé dans le répertoire courant
npx create-react-app nom-app
```

Une fois l'application créée, ouvrir le dossier `nom-app` dans VSCode ou l'éditeur de votre choix

Une fois dans le projet, il est possible de lancer le serveur à l'aide du script `start` défini dans la section `scripts` du fichier `package.json` :

```bash
# Avec NPM
npm run start
# Avec Yarn
yarn start
```

## Les composants

Une interface construite avec ReactJS est une arborescence de composants. Le composant par défaut créé à l'installation de l'application est nommé `App`. Il est injecté depuis le fichier `src/index.js` dans la balise `div` d'id `root` :

> src/index.js

```js
// Le composant App se trouve dans src/App.js
import App from './App';

//...

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Ecrire un composant

Pour écrire un composant, on peut créer un fichier Javascript et le déclarer sous forme de fonction :

```js
// src/Hello.js
const Hello = () => <h1>Hello !</h1>;

export default Hello;
```

Ce composant très minimaliste est représenté sous forme d'une fonction qui renvoie un contenu `JSX`. `JSX` est une extension syntaxique de Javascript introduite par ReactJS, permettant d'écrire des composants.

```js
// Autre syntaxe possible
function Hello() {
  return (
    <h1>Hello !</h1>
  );
}

export default Hello;
```

Au sein d'un composant, on peut donc décrire le contenu qu'on souhaite afficher. Dans ces composants, on peut utiliser des balises HTML, mais cela n'en fait en rien un contenu HTML. C'est React qui calculera, sur la base du JSX qu'on aura écrit, le contenu HTML à générer, [à l'aide de Javascript](https://fr.reactjs.org/docs/introducing-jsx.html#jsx-represents-objects).

Enfin, on peut écrire un composant dans un fichier dédié, puis en faire l'export par défaut de ce fichier. Nous en faisons donc un module importable dans n'importe quel autre composant de React.

> src/Hello.js

```js
const Hello = () => <h1>Hello !</h1>;

export default Hello;
```

> src/App.js

```js
import Hello from './Hello';

function App() {
  return (
    <Hello />
  );
}

export default App;
```

> src/index.js

```js
import App from './App';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Propriétés

En entrée de tout composant, on peut lui passer des **propriétés**. Pour les lire, on va utiliser un argument `props` :

> src/Hello.js

```js
const Hello = (props) => <h1>Hello {props.name} !</h1>;

export default Hello;
```

Dans un autre composant, si on souhaite utiliser le composant `Hello`, on pourra lui indiquer ses propriétés grâce à des **attributs** en JSX :

> src/App.js

```js
import Hello from './Hello';

function App() {
  // Affichera <h1>Hello Bob !</h1>
  return (
    <Hello name="Bob" />
  );
}

export default App;
```

On peut également déstructurer les props pour utiliser directement les propriétés dans le composant :

```js
// extrait props.name directement dans une variable name
const Hello = ({ name }) => <h1>Hello {name} !</h1>;

export default Hello;
```

> Note importante : on ne **modifiera pas** une propriété dans un composant. En effet, si on reçoit une propriété, c'est qu'elle a été transmise par un composant situé au-dessus de nous dans l'arborescence. Nous n'avons donc pas à modifier ce qui nous a été transmis. Le contrôle de la valeur doit rester à l'endroit où nous avons transmis cette valeur, pas à l'endroit où nous la recevons. On peut également appeler ça le **one-way data binding** : toujours du parent à l'enfant

#### Validation des types sur les propriétés

Si on utilise Javascript et non Typescript, alors nous n'avons pas de typage fort.

Cependant, il existe un package `prop-types` permettant d'indiquer à ReactJS le type attendu pour les propriétés passées à un composant.

Il faut donc installer ce package, puis l'utiliser dans nos composants :

```bash
npm i prop-types
```

> src/Hello.js

```js
import PropTypes from 'prop-types';

const Hello = ({ name }) => (
    <h1>Hello {name}</h1>
);

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;
```

> La différence entre Typescript et Javascript ici, est que la validation avec `prop-types` ne se fera pas à l'étape de compilation mais au "runtime", quand l'application sera lancée. En cas de propriétés incorrectes, un _warning_ s'affichera dans la console avec `prop-types`. Avec Typescript, nous devrions avoir l'erreur dès la compilation

Retrouvez la liste des PropTypes utilisables [ici](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes).

### Etat

Un composant peut disposer d'un **état interne**. Contrairement aux propriétés que le composant peut recevoir en entrée, et que l'**on ne va pas modifier**, un état pourra quant à lui être modifié. En effet, si on déclare une variable d'état dans un composant, alors nous contrôlons la valeur de cette variable, contrairement à une propriété.

Pour créer une variable d'état, on va utiliser la fonction `useState` exportée par React :

```js
import { useState } from 'react';

function Counter() {
  // Declare a new stae variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

> Note : la fonction `useState` est ce qu'on appelle un **hook** : une fonction utilitaire qui va effectuer une tâche et nous renvoyer des informations

En paramètre, nous lui indiquons la valeur initiale de l'état (ici 0 pour notre compteur).

En retour, la fonction `useState` va nous renvoyer un tableau contenant la variable d'état, que nous pourrons utiliser dans le rendu du composant, et une fonction permettant de modifier la valeur de la variable d'état.

Nous déstructurons alors ce tableau pour disposer d'une variable `count` et une fonction `setCount`.

### Hooks

Les hooks sont des **fonctions utilitaires réutilisables** dans n'importe quelle partie de l'application.

Ils peuvent donc prendre des paramètres, mais également (et surtout) nous retourner de l'information utile.

L'exemple de hook le plus courant est fourni par React lui-même : `useState(initialValue)`.

Ce hook permet de disposer d'une variable d'état qui va suivre le cycle de vie du composant.

En paramètre, on lui fournira une valeur initiale.

En retour, on pourra extraire d'un tableau la variable elle-même, ainsi qu'une méthode permettant de la modifier.

Exemple :

```js
import { useState } from 'react';

const MyComponent = () => {
  // Si on exécutait setLoading(false), on modifierait la valeur de la variable loading
  const [loading, setLoading] = useState(true);

  return (loading ? <div>Loading...</div> : <div>Coucou !</div>);
}
```

> Note : Il ne faut **jamais** modifier directement une variable d'état (avec un simple `loading = false` par exemple). Les raisons sont multiples : une variable d'état est ce qu'on appelle **immuable** (en anglais "**immutable**"). Il est donc nécessaire d'utiliser la fonction `setLoading` fournie dans notre exemple plutôt qu'un simple signe `=`. Par ailleurs, quand on effectue une mise à jour de l'état avec la fonction appropriée, React peut planifier une mise à jour de l'affichage du composant, donc un rafraîchissement visuel

Autre exemple avec `useEffect`, qui permet de programmer des effets de bord à certains moments du cycle de vie du composant :

```js
useEffect(() => {
  setLoading(true);
  fetchUserList()
    .then((userList) => setUserList(userList))
    .catch((e) => {
      console.error(e);
      setError(true);
    })
    .finally(() => setLoading(false));
}, []); // <-- Le tableau de dépendances permet de contrôler à quel moment l'effet de bord se lance
```

`useEffect` prend un callback en premier paramètre, et un tableau de dépendances en second paramètre.

Ce tableau de dépendances permet de contrôler à quel moment l'effet de bord se lance.

Ici, un tableau vide indique que nous souhaitons que la fonction se lance juste après le **montage** du composant.

Dans ce tableau, on pourrait également mettre des propriétés passées en entrée du composant par exemple, qui forcerait l'exécution d'une fonction particulière lorsque la propriété change (d'où la notion d'effet de bord : il se passe quelque chose, nous lançons un effet suite à cette chose).

#### Des hooks personnalisés

Nous pouvons également définir **nos propres hooks**, afin de disposer de fonctionnalités réutilisables au sein de notre application.

Exemple :

Dans l'exemple d'avant, nous avons utilisé `useEffect` pour récupérer visiblement une liste d'utilisateurs.

Nous pourrions considérer que notre application aura besoin de récupérer de la donnée de manière générale, pas forcément que des utilisateurs, et ainsi généraliser le comportement d'une telle fonctionnalité.

On appellerait cette fonctionnalité `useFetch`, car elle nous sert à récupérer (ou fetch) des données.

Ainsi, dans un nouveau fichier `src/hooks/useFetch.js`, on peut définir ce comportement général :

```js
import { useEffect, useState } from 'react';

const useFetch = (callback) => { // callback en entrée : comment chercher la donnée
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    callback()
      .then((res) => setData(res))
      .catch((e) => {
        console.error(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return [loading, data, error]; // en retour, informations sur la requête et la récupération des données
};

export default useFetch;
```

On prend donc un callback en entrée, et on fournit à l'appelant des informations sur la requête en cours, sous forme de tableau.

Nous pouvons donc internaliser la logique de récupération des données, et exposer à l'appelant les informations considérées comme pertinentes.

Dans un composant `src/components/Users.js` :

```js
const Users = () => {
  const [loading, data, error] = useFetch(fetchUsers);

  return (
    //...
  );
}
```
