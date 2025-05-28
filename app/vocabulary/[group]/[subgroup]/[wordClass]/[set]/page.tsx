import SetDictionary from '@/components/Dojo/Vocab/SetDictionary';
import { ISet } from '@/lib/interfaces';

type Params = Promise<ISet>;

export default async function VocabGroupPage({ params }: { params: Params }) {
  const awaitedParams = await params;

  return (
    <SetDictionary
      group={awaitedParams.group}
      subgroup={awaitedParams.subgroup}
      wordClass={awaitedParams.wordClass}
      set={awaitedParams.set}
    />
  );
}
