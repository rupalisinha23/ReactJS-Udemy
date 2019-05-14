import React from 'react';
import ReactDOM from'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div> Are you sure to click?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" 
                            timeAgo="Today at 6:00pm" 
                            content="Nice blog post!" 
                            avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="John" 
                            timeAgo="Today at 5:54pm" 
                            content="Good job!"
                            avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sandy" 
                            timeAgo="Yesterday at 1:00pm" 
                            content="Not bad rather huh!!:)" 
                            avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Lily" 
                        timeAgo="1w ago" 
                        content="Got my basics clear" 
                        avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));