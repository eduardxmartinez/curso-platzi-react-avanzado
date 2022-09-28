import React from 'react'
import { Category } from '../Category'
import {List,Item} from "./styles"
import db from '../../../api/db.json'

export const CategoriesList = () => {
    return (
        <List>
            {
                db.categories.map((item) => <Item key={item.id}><Category {...item} key={item.id}/></Item>)
            }
        </List>
    )
}