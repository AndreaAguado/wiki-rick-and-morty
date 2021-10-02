import { Link } from 'react-router-dom';

function ModalWindow(props) {
    return (
        <div className='modal'>
            <div className='modal__dialog'>
                <div className='modal__content'>
                    <header className='modal__header'>
                        <h2 className='modal__title'>{props.title}</h2>
                        <Link to='/'>
                            <button className="return_button">Volver</button>
                            {/* <span className='modal__close icon fas fa-times'></span> */}
                        </Link>
                    </header>
                    <section>
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;
