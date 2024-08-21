function Toolbar(props) {
  const {isLoggedIn, onClickLogin, onClickLogout} = props;

  return (
    <div>
      {isLoggedIn && <span className={'me-3'}>환영합니다.</span>}
      {
        isLoggedIn
          ? (<button type={'button'} className={'btn btn-warning'} onClick={onClickLogout}>로그아웃</button>)
          : (<button type={'button'} className={'btn btn-primary'} onClick={onClickLogin}>로그인</button>)
      }
    </div>
  );
}

export default Toolbar;











