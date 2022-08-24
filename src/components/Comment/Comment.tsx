import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){

        onDeleteComment(content);
    }

    function handlLikeComment(){
        setLikeCount((state) => {
            return state +1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/wagnermanko.png"
                alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wagner Mengue</strong>                            
                            <time 
                                title="16 de Agosto às 10:11h" 
                                dateTime="2022-08-16 10:11:15">                                    
                                    Cerca de 1h atrás
                            </time>
                        </div>
                        <button                             
                            title="Deletar comentário"
                            onClick={handleDeleteComment}    
                        >
                                <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handlLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}