import { TransitionGroup, CSSTransition } from 'react-transition-group';

function List({ items, onRemove }) {
  return (
    <TransitionGroup component={'ul'}>
      {items.map((item) => (
        <CSSTransition classNames="os" timeout={750} key={item.id}>
          <li onClick={() => onRemove(item.id)}>{item.title}</li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default List;
