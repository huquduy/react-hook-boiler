import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function SimpleModal() {
//   const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

  return (
    <div>

        <div style={modalStyle} >
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
    </div>
  );
}