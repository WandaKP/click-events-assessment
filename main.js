const foo = document.getElementById("foo");
const bar = document.getElementById("bar");
const fooBar = document.getElementById("fooBar");
const main = document.querySelector('main');

foo.addEventListener('click', respondToFoo)
bar.addEventListener('click', respondToBar)
fooBar.addEventListener('click', respondToFooBar)

function respondToFoo() {
const h3Foo = document.createElement('h3');
h3Foo.textContent = "Foo";
main.appendChild(h3Foo);
}
function respondToBar() {
    const h3Bar =  document.createElement('h3');
    h3Bar.textContent = "Bar";
    main.appendChild(h3Bar)
    }
function respondToFooBar() {
    const h2FooBar = document.createElement('h2');
    h2FooBar.textContent = "FooBar";
    main.appendChild(h2FooBar);
    }