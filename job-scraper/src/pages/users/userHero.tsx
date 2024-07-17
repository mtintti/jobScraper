import Avatar from "@/components/Avatar"; 

interface UserHeroProps {    
}

const UserHero: React.FC<UserHeroProps> = () => {

    return (
        <div>
            <div className="bg-neutral-700 h-44 relative">
                <div className="absolute -bottom-16 left-4">
                    <Avatar isLarge hasBorder />
                </div>
            </div>
        </div>
    );
};

export default UserHero;
