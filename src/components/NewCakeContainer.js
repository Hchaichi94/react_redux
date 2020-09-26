import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'

function NewCakeContainer(props) {
    const [num, setNum] = useState(1)
    return (
        <div>
            <h2>number of cakes -{props.numOfCakes}</h2>
            <input type="text" value={num} onChange={e => setNum(e.target.value)} />
            <button onClick={() => props.buyCake(num)}>Buy Cake</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToState = dispatch => {
    return {
        buyCake: num => dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(NewCakeContainer)