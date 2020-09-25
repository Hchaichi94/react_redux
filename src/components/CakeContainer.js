import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'

function CakeContainer(props) {
    return (
        <div>
            <h2>number of cakes -{props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToState)(CakeContainer)