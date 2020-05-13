export interface NavListItem {
  path: string
  name: string
}

export interface ArticleDetail {
  articleAuthor: string,
  articleAuthorId: number,
  articleCommentCount: number,
  articleContent: string,
  articleLikeCount: number,
  articleRelease: boolean,
  articleSummary: string,
  articleTitle: string,
  articleTop: boolean,
  articleViews: number,
  createdAt: string,
  id: number,
  openComment: boolean,
  recommend: boolean,
  updatedAt: string
}
