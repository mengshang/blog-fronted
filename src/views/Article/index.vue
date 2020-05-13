<template>
  <div class="app-container">
    <ul>
      <li v-for="(item, index) in articleList" :key="index" class="article-item">
        <router-link :to="`article/${item.id}`">
          <div class="item-wrapper">
            <article class="article-wrapper">
              <h3 class="title">
                <span class="article-lin">{{item.articleTitle}}</span>
                <span class="hover-dot"></span>
              </h3>
              <p class="summary">{{item.articleSummary}}</p>
              <footer class="footer">
                <div class="author-wrapper">
                  <div class="avatar-wrapper">
                    <i class="avatar"
                       style="background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584957594102&di=6f79fd0bdb7a15732826bb1bdec5b845&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F10%2F20170410095843_SEvMy.thumb.700_0.jpeg)"></i>
                  </div>
                  <div class="author-name">
                    {{item.articleAuthor}}
                  </div>
                </div>
                <div class="info-wrapper">
                  <!--<i>icon</i>-->
                  <!--<span class="count">43</span>-->
                  <!--<i>iocn</i>-->
                  <!--<span class="count">423</span>-->
                  <time class="tiem" :datatime="item.createdAt">{{item.createdAt}}</time>
                </div>
              </footer>
            </article>
            <!--<div class="cover">-->
            <!--a-->
            <!--<img src="" alt="">-->
            <!--</div>-->
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getArticleList } from '@/api/article'

@Component({})

export default class Home extends Vue {
  private articleTitle: string = ''
  private current: number = 1
  private size: number = 20
  private articleList: Array<object> = []

  mounted() {
    this.handleGetArticleList()
  }

  /**
   * 获取文章列表
   */
  handleGetArticleList(): void {
    const data: object = {
      articleTitle: this.articleTitle,
      current: this.current,
      size: this.size
    }
    getArticleList(data).then((res: any) => {
      this.articleList = res.data.list
    })
  }
}

</script>

<style scoped lang="scss">
.article-item {
  .item-wrapper {
    margin-bottom: 32px;
    position: relative;
    padding-bottom: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  .article-wrapper {
    width: 100%;
    color: #666;

    .category {
      cursor: pointer;
      color: #999
    }

    .title {
      margin: 10px 0 0;
      font-weight: 700;
      color: #161b3d;
    }

    .summary {
      margin: 0.8em 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;

      .author-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .avatar-wrapper {
          display: flex;
          justify-content: flex-start;

          .avatar {
            display: inline-block;
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: cover;
          }
        }

        .author-name {
          margin-left: 12px;
          display: flex;
          justify-content: flex-start;
          flex-wrap: nowrap;
          white-space: nowrap;
        }
      }

      .info-wrapper {
        i {
          display: inline-block;
          margin-right: 2px;
        }

        .count, .time {
          white-space: nowrap;
        }

        span {
          margin-right: 10px;
          line-height: 1;
        }
      }
    }
  }

  .cover {
    width: 340px;
    min-width: 340px;
    border-radius: 4px;
    background-size: cover;
    cursor: pointer;
    overflow: hidden;

    img {
      max-width: 100%;
    }
  }
}
</style>

