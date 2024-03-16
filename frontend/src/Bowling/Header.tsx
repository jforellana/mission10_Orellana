import logo from '../../src/logo.png';

function Header() {
  return (
    <head className="row header navbar navbar-dark bg-dark">
      <div className="col-4">
        <img src={logo} alt="logo" width={200} />
      </div>
      <div className="col subtitle">
        <h1 className="text-white">Bowling League Database</h1>
        <p className="text-white">
          Information from the bowling teams Marlins and Sharks
        </p>
      </div>
    </head>
  );
}

export default Header;
