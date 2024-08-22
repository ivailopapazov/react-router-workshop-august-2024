import { Link } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TodoListItem({
    todo,
    clickHandler,
}) {
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        <ListItem
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="details"
                    LinkComponent={Link}
                    to={`/todos/${todo.id}`}
                >
                    <SettingsIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton
                role={undefined}
                onClick={() => clickHandler(todo)}
                dense
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.todo} />
            </ListItemButton>
        </ListItem>
    );
}
