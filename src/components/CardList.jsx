import Card from "./Card";

const CardList = (props) => {
  const news = props.news;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 p-5 sm:p-3">
      {news.map((story) => (
        <Card key={story.title} story={story} />
      ))}
    </div>
  );
};

export default CardList;