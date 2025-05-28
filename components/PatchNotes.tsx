import PostWrapper from '@/components/reusable/PostWrapper';
import patchNotes from '@/static/patchNotes';

const PatchNotes = () => {
  return <PostWrapper textContent={patchNotes} />;
};

export default PatchNotes;

