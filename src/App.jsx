const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const helloContinents = Array.from(continents, c => `Hello ${c}`);
const message = helloContinents.join('');

const element = (
  <div title="Outerdiv">
    <h1>{message}</h1>
  </div>
);

const element2 = (
  <div title="OuterOuterdiv">
    <h1>Hi</h1>
  </div>
);

ReactDOM.render(element, document.getElementById('content'));