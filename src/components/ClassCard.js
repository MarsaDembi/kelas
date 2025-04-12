
// components/ClassCard.js
import FriendAvatar from './FriendAvatar';

const ClassCard = ({ className, friends }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80 text-center">
      <h2 className="text-xl font-bold mb-4">{className}</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {friends.map((friend, index) => (
          <FriendAvatar key={index} name={friend.name} imageUrl={friend.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default ClassCard;