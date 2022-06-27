<template>
  <div class="analyzes_slug_tmpl">
    <RFHeading tag="h2">
      Антитела к циклическому цитрулиновому пептиду(АЦЦП) - анти-ССР, маркер
      Ревматоидного артрита
    </RFHeading>
    <Tabs v-model="tab" :tabs="tabs" type="wrap" type-tab="outline-primary" />

    <div class="analyzes_slug_tmpl-container">
      <section class="content">
        <RFText>
          <strong>Цитруллинированный пептид</strong> – это белок организма. При
          нарушении работы иммунной системы этот белок начинает «атаковаться»
          собственными защитными силами – антителами. То есть обнаружение этих
          антител к циклическому цитруллинированному пептиду свидетельствует о
          наличии у пациента аутоиммунных заболеваний – ревматоидного артрита
          или системной красной волчанки.
          <br />
          <strong>Ревматоидный артрит</strong> – тяжелое аутоиммунное
          заболевание, которое проявляется симметричным воспалением суставов
          (как мелких, так и крупных). Характерным признаком является чувство
          скованности по утрам длительностью более одного часа. Суставы начинают
          болеть, деформироваться, становятся припухлыми.
          <br />
          <strong
            >Анализ имеет ряд преимуществ по сравнению с ревматоидным
            фактором</strong
          >
          (см. ревматоидный фактор), который также используется для диагностики
          данных заболеваний:
        </RFText>
        <ul>
          <li>
            Высокая специфичность (нет прочих факторов, которые могут привести к
            появлению в крови АЦЦП);
          </li>
          <li>
            Появление в самом начале заболевания до клинических проявлений;
          </li>
          <li>
            Положительный результат даже при серонегативном варианте
            ревматоидного артрита (у таких пациентов отрицательный результат
            анализа на ревматоидный фактор);
          </li>
          <li>
            Концентрация АЦЦП дает возможность оценить прогноз и тяжесть
            заболевания.
          </li>
        </ul>
      </section>
      <aside>
        <PopularCard
          :is-button="true"
          :tags="tags"
          price="6000"
          class="popular-wrap__card"
        />
      </aside>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Tabs from 'molecules/Tabs/index.vue'
import PopularCard from 'molecules/Cards/PopularCard/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
/**
 * 'TEMPLATES/AnalyzesSlugTemplate'
 * @displayName AnalyzesSlugTemplate
 */
export default Vue.extend({
  name: 'AnalyzesSlugTemplate',
  components: {
    Tabs,
    RFHeading,
    RFText,
    PopularCard,
  },
  data() {
    return {
      tab: 1,
      tabs: [
        {
          id: 1,
          title: 'Описание',
        },
        {
          id: 2,
          title: 'Показания',
        },
        {
          id: 3,
          title: 'Подготовка к исследованию',
        },
        {
          id: 4,
          title: 'Интерпретация результатов',
        },
      ],
      tags: [
        { id: 1, name: '1 день' },
        { id: 3, name: '1 день' },
        { id: 2, name: 'Доступно с выездом на дом' },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.analyzes_slug_tmpl {
  padding: 0;

  .rf-heading {
    margin: 46px 0 40px;
  }
  &-container {
    @include flex-row();

    width: 100%;
    margin: 0 auto;
    align-items: flex-start;
    gap: 40px;
    padding: 40px 0;
    .content {
      width: 100%;
    }
    aside {
      width: 420px;
    }

    @include tablet {
      padding: 20px 40px;
      flex-direction: column-reverse;
      aside {
        width: fit-content;
        min-width: 300px;
      }
    }
  }
  ol {
    list-style: decimal inside none;
  }
  ul {
    list-style: disc inside none;
  }
  li {
    list-style: inherit;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 20px;

    &::marker {
      color: $c-primary;
    }
  }
  p {
    margin-bottom: 40px;
    @include wide-laptop {
      width: 100%;
    }
    @include phone {
      margin-bottom: 15px;
    }
  }
  p,
  li {
    max-width: 860px;
    @include font-size(16px, 28px);

    @include wide-laptop {
      width: 100%;
    }
    @include phone {
      @include font-size(14px, 20px);
    }
  }
}
</style>
