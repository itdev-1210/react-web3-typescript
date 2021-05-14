export interface ItemProps {
  asset?: string;
  asset2x?: string;
  className?: string;
}

const SliderItem = (props: ItemProps) => {
  return (
    <div className={props.className}>
      <img
        src={props.asset}
        srcSet={`${props.asset} 1x, ${props.asset2x} 2x`}
        alt=""></img>
    </div>
  );
};

export default SliderItem;
