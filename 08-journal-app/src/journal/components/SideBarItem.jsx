import { useMemo } from "react";
import {
    Grid,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "../../store/journal";
import { useDispatch } from "react-redux";

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const onClickActiveNote = () => {
        dispatch(setActiveNote({id, title, body, date, imageUrls}));
      }

    const newTitle = useMemo(() => 
    {
        return title.lenght > 17 ? title.substring(0,17) + '...' : title;
    }, [title])

    return (
        <ListItem disablePadding onClick={onClickActiveNote}>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} secondary={body}/>
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
