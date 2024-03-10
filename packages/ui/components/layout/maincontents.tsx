export function MainContents({
  children,
  expandable,
}: {
  children: React.ReactNode;
  expandable: boolean;
}): JSX.Element {
  const TRANSITION_OPTION = 'transition-all ease-in-out duration-1000';

  return (
    <section
      className={`w-full bg-blue-200 h-full mt-[67px] py-10 px-10 overflow-auto ${TRANSITION_OPTION} ${expandable && 'ml-[260px]'}`}
    >
      {children}
    </section>
  );
}