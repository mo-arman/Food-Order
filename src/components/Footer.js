const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i class="fa-solid fa-heart"></i>
        <a className="a" href="https://www.linkedin.com/in/moh-arman-9bba30232/" target="_blank">
          Mohammad Arman
        </a>
        <i class="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
      </div>
    );
  };

  export default Footer;