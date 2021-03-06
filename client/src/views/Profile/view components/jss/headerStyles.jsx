import { container } from '../../../../assets/jss/main'

const headerStyles = {
  container: {
    ...container,
    height: '20rem',
    '@media (max-width: 600px)': {
      height: '18rem',
      padding: '0 4px'
    }
  },

  img: {
    width: '100%',
    height: '100%',
    overflow: "hidden",
    objectFit: 'cover',
    objectPosition: 'center',
    borderBottomLeftRadius: '1rem',
    borderBottomRightRadius: '1rem',
    zIndex: '-1'
  },
  headerTitle: {
    marginTop: '-9.5rem',
    position: 'relative',
    textAlign: 'center',
  },

  avatar: {
    width: '10rem',
    height: '10rem',
    borderRadius: '50%',
    border: '.3rem solid #fff',
    overflow: "hidden",
    objectFit: 'cover',
    objectPosition: 'center',
  },
  fileIcon: {
    transform: ' translateY(0.1rem)'
  },
  editAvatarBtn: {
    position: 'absolute',
    display: 'block',
    bottom: '3.5rem',
    right: '3.5rem',
    // margin: '70% -30%',
    background: '#E4E6EB',
    padding: '.5rem',
    borderRadius: '50%',
    outline: 'none',
    border: 'none',
    transition: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    '&:hover': {
      cursor: 'pointer',
      background: '#E4E6EE'
    }
  },
  avatarInputFile: {
    // fontSize: '100px',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '3rem',
    height: '3rem',
    outline: 'none',
    // opacity: 1,
    // Make button invisible
    opacity: 0,
    overflow: 'hidden',
    "&:hover": {
      cursor: 'pointer'
    }
  },
  displayName: {
    color: "rgba(51,51,51,.9)",
    fontSize: "1.8rem",
    textAlign: "center",
    margin: '.5rem auto'
  },
  statusWrap: {
    display: 'block',
    textAlign:'center',
    position: 'relative',
    width: '100%',
  },
  status: {
    width: '100%',
    position: "absolute",
    textAlign: 'center',
    color: "rgba(51,51,51,.8)"
  },
  hiddenEditButton : {
    float: 'right',
    marginTop: "5px",
    height: '2rem',
    display: 'block',
    opacity: 0,
    visibility: 'hidden'
  },
  activeEditButton: {
    float: 'right',
    marginTop: "5px",
    height: '2rem',
    display:'block',
    opacity: 1,
    visibility: 'visible'
  },
  inputField: {
    display: 'flex',
    flexWrap: 'wrapped',
    justifyContent: 'center',
    margin: '.5rem 0'
  },
  textField: {
    marginBottom: '0',
    marginLeft: "1rem",
    width: '50%',
    display: 'flex',
    textAlign: 'center'
  },

  addNewButton: {
    width: '75%',
    border: "1px solid #1976D2",
    marginLeft: '1rem',
    color: "#1976D2",
    textTransform: 'none',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    '@media (max-width: 600px)': {
      width: '100%',
      marginLeft: 0
    }
  },
  hr: {
    height: "1px",
    width: '70%',
    display: 'block',
    background: "rgba(51,51,51,.5)",
    margin: '2rem auto',
    '@media (max-width: 600px)': {
      margin: '1.5rem auto',
      width: '90%'
    }
  }
}

export default headerStyles;