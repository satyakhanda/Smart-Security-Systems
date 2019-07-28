import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

export default class SearchResults extends Component {
    
    render () {
        return (
            <div>
                <ExpansionPanel>
                    {/* <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>
                                <Avatar>W</Avatar>
                                <span>{mrn}</span>
                            </Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Indications</Typography>
                            <div>
                                <List className={classes.column}>
                                    <ListItem>
                                        <ListItemText primary="Item1" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Item2" />
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Organisms</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Current Abx</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Recommended Abx</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Action</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <Divider />
                    <FullWidthTabs /> */}
                </ExpansionPanel>
            </div>
        );
    }
    
}