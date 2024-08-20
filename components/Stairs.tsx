import { motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

// 時差遅延の逆インデックスを計算
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/*
      6つのmotion.divをレンダリングし、それぞれが階段の1ステップを表します。
      各divには、stairsAnimationオブジェクトで定義された同じアニメーションが適用されます。
      各divの遅延は、逆順のインデックスに基づいて動的に計算され、次のステップに進むごとに遅延が減少する階段状のエフェクトが作成されます。
    */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: reverseIndex(index) * 0.1,
            }}
            // TODO: ステップのスタイルを修正
            className="h-full w-full bg-accent relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
