import style from './FriendsListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline = true }) => {
  const online = isOnline ? 'rgb(37, 218, 91)' : 'rgb(252, 70, 70)';

  const FriendListStyle = {
    background: online,
  };

  return (
    <li className={style.item}>
      <div className={style.status} style={FriendListStyle}>
        {isOnline}
      </div>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className="friend">{name}</p>
    </li>
  );
};
