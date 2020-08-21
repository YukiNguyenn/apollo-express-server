import Comments from '../../data/query-data-comment.js';

const Mutation = {
  addComment: async (root, { type, label }, context) => {
    console.log(`adding ${type} tag '${label}'`);
    const newTag = await Tags.addTag(type, label);
    pubsub.publish(TAGS_CHANGED_TOPIC, { tagAdded: newTag });
    return newTag;
  },
}

export default Mutation