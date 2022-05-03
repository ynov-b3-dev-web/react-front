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
