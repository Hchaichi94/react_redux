import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/index'


function iceCreamContainer(props) {
    return (
        <div>
            <div>
                <h2>number of IceCream -{props.numOfIceCream}</h2>
                <button onClick={props.buyIceCream}>Buy IceCream</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToState = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToState)(iceCreamContainer)