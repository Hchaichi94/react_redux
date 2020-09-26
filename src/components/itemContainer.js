import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux/index'

function itemContainer(props) {
    return (
        <div>
            <h2>item {props.item}</h2>
            <button onClick={props.buyItem}>Buy items</button>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
    return {
        item: itemState
    }
}

const mapDispatchToState = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ?
        () => dispatch(buyCake())
        : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}
export default connect(mapStateToProps, mapDispatchToState)(itemContainer)
