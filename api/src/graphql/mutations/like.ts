// API: Implement resolver like with userId from context.user._id (Example in src/graphql/mutations/follower.ts)
// API: Implement resolver unlike with userId from context.user._id (Example in src/graphql/mutations/follower.ts)
import { schemaComposer } from 'graphql-compose'
import { TweetModel, TweetTC } from '../../models/tweet'

const like = TweetTC.getResolver("findMany")
