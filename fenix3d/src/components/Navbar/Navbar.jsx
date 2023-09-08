import './Navbar.css';
import '../cartwidget/cartwidget'
import { AppBar , Button , Toolbar, Typography} from '@mui/material';
import CartWidget from '../cartwidget/cartwidget';

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar sx={{justifyContent: 'space-around'}}>
        <Typography sx={{ color: "black" }}>
              <h1>Fenix3D</h1>
        </Typography>
        <Button sx={{color: 'black', }}>
          Home
        </Button>
        <Button sx={{color: 'black'}}>
          Categorias
        </Button>
        <Button sx={{color: 'black'}}>
          Productos
        </Button>
        <Button sx={{color: 'black'}}>
          <CartWidget/>
        </Button>
      </Toolbar>
    </AppBar>);
};

export default Navbar;