import React from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';


export default ({task}) => {
    return (
        <ListItem button>
            {task}
        </ListItem>
    );
}