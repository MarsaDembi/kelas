import Image from 'next/image';

const FriendAvatar = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={imageUrl}
        alt={name}
        width={64}
        height={64}
        className="rounded-full"
      />
      <span className="mt-2 text-sm">{name}</span>
    </div>
  );
};

export default FriendAvatar;
