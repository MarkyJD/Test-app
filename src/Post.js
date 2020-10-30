import React from 'react';
import './Post.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function Post({ title, user, content }) {

    const date = new Date();

    return (
        <div>
            <Card className="root">
                <CardContent>
                    <div className="header">
                        <Typography variant="h5" component="h4" gutterBottom>
                            {title}
                        </Typography>
                        <Typography className="user_info" color="textSecondary" gutterBottom>
                            {user} | {date.toDateString()}
                        </Typography>
                    </div>
                    <Typography variant="body1" component="p">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <TextField 
                        className="text_field"
                        id="standard-full-width"
                        label="Reply"
                        placeholder="Enter you message..."
                        fullWidth
                        margin="none"
                    />
                    <Button size="small" variant="contained" color="primary">
                        Send
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Post
