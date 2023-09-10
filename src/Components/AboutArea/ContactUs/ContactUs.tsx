import {
    Button,
    ButtonGroup,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
} from '@mui/material';
import './ContactUs.css';
import SendIcon from '@mui/icons-material/Send';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function ContactUs(): JSX.Element {
    return (
        <div className='ContactUs'>
            <form>
                <Typography variant='h3'>Contact Us</Typography>
                <TextField
                    label='Name'
                    variant='outlined'
                    className='text-box'
                ></TextField>
                <TextField
                    label='Email'
                    type='email'
                    variant='outlined'
                    className='text-box'
                ></TextField>
                <TextField
                    label='Phone'
                    type='tel'
                    variant='outlined'
                    className='text-box'
                ></TextField>
                <TextField
                    label='Message'
                    variant='outlined'
                    className='text-box'
                ></TextField>
                <FormControlLabel
                    label='Send me promotional emails'
                    control={<Checkbox />}
                    className='form-control-label'
                ></FormControlLabel>

                <ButtonGroup variant='contained'>
                    <Button type='submit' color='primary'>
                        Send &nbsp; <SendIcon />
                    </Button>
                    <Button type='reset' color='secondary'>
                        Clear &nbsp; <RestartAltIcon />
                    </Button>
                </ButtonGroup>
            </form>
        </div>
    );
}

export default ContactUs;
