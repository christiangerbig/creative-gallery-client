type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="pageTitleContainer">
      <h2> {title} </h2>
    </div>
  );
};

export default PageTitle;
