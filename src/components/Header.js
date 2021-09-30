import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <div className='header'>
            <h1 style = {HStyle}>{title = 'EVENT MANAGER'}</h1>
            <Button color = {showAdd ? 'red' : 'black'} text = {showAdd ? 'close' : 'add'} onClick={onAdd}></Button>
        </div>
    )
}

const HStyle = {
    color: 'white',
    backgroundColor: 'black'
}

Header.defaultProps = {
    title: 'Task Tracker'
}
export default Header
