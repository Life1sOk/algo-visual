import React from "react";

import { ItemsItemContainer } from './items-item.style';

const ItemsItem = ({ item }) => {
    const { id, status, description } = item;

    return (
        <ItemsItemContainer>
            <input type='checkbox' defaultValue={status} />
            <span>{description}</span>
        </ItemsItemContainer>
    )
}

export default ItemsItem;