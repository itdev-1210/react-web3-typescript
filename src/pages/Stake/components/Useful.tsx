import UsefulLink from './UsefulLink';

const Useful = () => {
  return (
    <section className="section usufull-section" id="links">
      <div className="container container--small">
        <div className="section-title">usuful links</div>

        <div className="row">
          <div className="col-lg-6">
            <UsefulLink name="MERCHDAO contract address" address="0xc2ce0Ce945AcB774a19861bfaE3e8A9e9a20cB37"></UsefulLink>
          </div>
          <div className="col-lg-6">
            <UsefulLink name="MCH info on uniswap"></UsefulLink>
          </div>
          <div className="col-lg-6">
            <UsefulLink name="ETH-MCH uniswap pool"></UsefulLink>
          </div>
          <div className="col-lg-6">
            <UsefulLink name="Unicrypto liquidity lock"></UsefulLink>
          </div>
        </div>
        <div className="alert-msg">
          <div className="alert-msg__header">
            <span className="alert-msg__header__icon"></span>
            <span className="alert-msg__header__title">ATTENTION:</span>
          </div>
          <div className="alert-msg__text">
            Don’t send LP tokens directly to the address, or you’ll lose them! <br></br>
            Always use the staking window above!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Useful;
