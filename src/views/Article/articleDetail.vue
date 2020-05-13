<template>
  <div class="app-container">
    <div v-if="articleDetail.articleContent" class="main">
      <div class="article-header">
        <h1>{{articleDetail.articleTitle}}</h1>
      </div>
      <div class="article-content" v-html="articleDetail.articleContent"></div>
    </div>
    <not-data v-else />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getArticleDetail } from '@/api/article'
import { ArticleDetail } from '@/types'
import NotData from '@/components/NotData/index.vue'

@Component({
  components: {
    NotData
  }
})

export default class ArticleDetails extends Vue {
  private articleDetail: ArticleDetail = {
    articleAuthor: '',
    articleAuthorId: 0,
    articleCommentCount: 0,
    articleContent: '',
    articleLikeCount: 0,
    articleRelease: true,
    articleSummary: '',
    articleTitle: '',
    articleTop: false,
    articleViews: 0,
    createdAt: '',
    id: 0,
    openComment: false,
    recommend: false,
    updatedAt: ''
  }

  mounted(): void {
    this.handleGetArticleDetail()
  }

  /**
   * 获取文章详情
   */
  handleGetArticleDetail(): void {
    const articleId = this.$route.params.id
    getArticleDetail(articleId).then((res: any) => {
      this.articleDetail = res.data
    })
  }
}
</script>

<style lang="scss">
.app-container {
  .main {
    .article-header {
      margin-bottom: 2rem;
      text-align: center;
    }

    .article-content {
      font-size: 16px;
      line-height: 30px;

      pre {
        display: block;
        padding: 10px;
        margin: 0 0 10px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #abb2bf;
        background: #23241f;
        word-break: break-all;
        word-wrap: break-word;
        overflow: auto;
        border-radius: 5px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 1rem 0;
      }

      strong {
        font-weight: bold;
      }

      p > code {
        padding: 2px 4px;
        font-size: 90%;
        color: #c7254e;
        background-color: #f9f2f4;
        border-radius: 4px;
      }

      img {
        /* 图片居中 */
        display: flex;
        max-width: 100%;
        margin: 0 auto;
      }

      table {
        text-align: center;
        border: 1px solid #eee;
        margin-bottom: 1.5em;
      }

      th,
      td {
        padding: 0.5em;
      }

      tr:nth-child(2n) {
        background: #f7f7f7;
      }

      blockquote {
        margin: 0 0 1em;
        background-color: rgb(220, 230, 240);
        padding: 1em 0 0.5em 0.5em;
        border-left: 6px solid rgb(181, 204, 226);
      }
    }
  }
}
</style>
