import { Swiper, SwiperItem } from "components/common/swiper/index.js";
import BackTop from "components/content/backTop/BackTop.vue";
import { BACK_TOP_POSITION } from "./const.js";

/* 轮播图组件所需的混入 */
export const swiperMixin = {
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    imageLoaded() {
      this.isLoaded = true;
      this.$emit("swiperLoaded");
    },
  },
};

/* 回到顶部组件所需的混入 */
export const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
    };
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    getIsShowBackTop(position) {
      this.isShowBackTop = -position.y > BACK_TOP_POSITION;
    },
  }
};

/* 路由跳转的混入 */
export const aTagRouterLinkMixin = {
  methods: {
    routerLinkClick(event) {
      const targetDOM = event.target.closest("[navigator-url]");
      if (!targetDOM) {
        if (this.$toast) {
          this.$toast.show('暂无相关页面');
        }
        return;
      }
      const navURL = targetDOM.getAttribute("navigator-url");
      const pathMatch = navURL.match(/(?<=\/pages)(?<path>\/.*?)(?=\/|\?|#|$)/);
      const queryMatch = navURL.match(/(?<=\?)(?<query>.*?)(?=#|$)/);
      let path = '';
      const query = {};
      if (pathMatch) {
        const pathFormatting = {
          '/goods_list': '/goodslist',
          '/goods_detail': '/detail',
        };
        path = pathMatch.groups.path;
        if (pathFormatting.hasOwnProperty(path)) {
          path = pathFormatting[path];
        }
        if (queryMatch) {
          const queryStr = queryMatch.groups.query;
          queryStr.split('&').map((element) => {
            const [name, value] = element.split('=');
            query[name] = value;
          });
          this.$router.push({ path, query });
        } else {
          this.$router.push(path);
        }
      }
    },
  }
};
