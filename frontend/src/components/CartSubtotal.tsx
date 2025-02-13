const CartSubtotal = ({ subtotal }: { subtotal: number }) => {
  return (
    <div className="flex justify-between pt-5">
      <p className="font-satoshi text-base opacity-60 sm:text-xl">Subtotal </p>{' '}
      <p className="font-satoshi text-base font-bold sm:text-xl">${subtotal}</p>
    </div>
  );
};

export default CartSubtotal;
