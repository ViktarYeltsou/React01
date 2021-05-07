import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content}>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            </div>
            <div>
                <img src=''/>
            </div>
            <div className={s.posts}>
                My posts
                <div>
                    New post
                </div>
                <div className={s.item}>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;