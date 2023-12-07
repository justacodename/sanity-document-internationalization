import type {SanityClient} from 'sanity'
import type {ApplyConfigResult} from '../utils'

export interface IOnTranslationCreateContext {
  readonly document: Record<string, unknown> | undefined | null
  readonly client: SanityClient
  readonly config: ApplyConfigResult
  readonly translationLanguageId: string
}
