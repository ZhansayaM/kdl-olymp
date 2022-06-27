<template>
  <main class="board">
    <header>
      <RFHeading variant="light">Rocket Firm UI</RFHeading>
      <img src="images/rf-logo-2.png" alt="Rocket Firm" />
    </header>

    <section class="card">
      <RFHeading tag="h2">Rocket Firm Logo – RFLogo</RFHeading>
      <article class="component">
        <RFLogo />
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Heading – RFHeading</RFHeading>
      <article class="component">
        <RFHeading>Headline 1</RFHeading>
        <RFHeading tag="h2">Headline 2</RFHeading>
        <RFHeading tag="h3">Headline 3</RFHeading>
        <RFHeading tag="h4">Headline 4</RFHeading>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Text – RFText</RFHeading>
      <article class="component">
        <RFText>Default</RFText>
        <RFText variant="large">Large</RFText>
        <RFText variant="mid">Mid</RFText>
        <RFText variant="small">Small</RFText>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Button – RFButton</RFHeading>
      <article class="component">
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Primary</RFText>
          </div>
          <div class="component-col component-col--30">
            <RFButton>Primary</RFButton>
          </div>
          <div class="component-col component-col--30">
            <RFButton disabled>Disabled</RFButton>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Primary Icon</RFText>
          </div>
          <div class="component-col component-col--30">
            <RFButton is-icon>😼</RFButton>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Secondary</RFText>
          </div>
          <div class="component-col">
            <RFButton variant="secondary">Secondary</RFButton>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Secondary Icon</RFText>
          </div>
          <div class="component-col">
            <RFButton variant="secondary" is-icon>😼</RFButton>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Tertiary</RFText>
          </div>
          <div class="component-col">
            <RFButton variant="tertiary">Tertiary</RFButton>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Tertiary Icon</RFText>
          </div>
          <div class="component-col">
            <RFButton variant="tertiary" is-icon>😼</RFButton>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Button Icon</RFText>
          </div>
          <div class="component-col component-col--30">
            <ButtonBase icon="user" size="small" icon-right>Button</ButtonBase>
          </div>
          <div class="component-col component-col--30">
            <ButtonBase icon="cart" size="extra-small" variant="secondary" />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Button Cart</RFText>
          </div>
          <div class="component-col">
            <ButtonCart :count="2" />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Button Back</RFText>
          </div>
          <div class="component-col">
            <BackLink />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            <RFText variant="mid">Button To</RFText>
          </div>
          <div class="component-col">
            <ButtonTo link="/ui"> Новости </ButtonTo>
          </div>
        </div>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Input – RFInput</RFHeading>
      <article class="component">
        <div class="component-row">
          <div class="component-col component-col--30">Default</div>
          <div class="component-col component-col--30">
            <RFInput
              id="ref"
              v-model="input"
              :value="input"
              placeholder="X3TE0LG5"
            >
              <template #label> Referal code </template>
            </RFInput>
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">Error</div>
          <div class="component-col component-col--30">
            <RFInput id="ref" is-error placeholder="X3TE0LG5">
              <template #label> Referal code </template>
              <template #message>Error message</template>
            </RFInput>
          </div>
        </div>
        <InputAdditional
          class="component-row"
          :label="label"
          :variable="variable"
        />
        <div class="component-row">
          <div class="component-col component-col--30">DataInput</div>
          <div class="component-col component-col--30">
            <DataInput
              id="ref"
              v-model="input"
              is-error
              :value="input"
              placeholder="Введите вашу фамилию"
              type="text"
              is-important
              title="Фамилия"
              error="Это поле обязательно к заполнению"
            >
            </DataInput>
          </div>
        </div>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Dropdown</RFHeading>
      <article class="component">
        <DropdownBase
          v-model="dropdownSelectedOption"
          label="Dropdown"
          :options="dropdownOptions"
        >
          {{ dropdownSelectedOption.title || 'Placeholder' }}
        </DropdownBase>
      </article>
      <article class="component">
        <DropdownLang
          v-model="dropdownSelectedLangOption"
          label="DropdownLang"
          :options="dropdownLangOptions"
        >
          {{ dropdownSelectedLangOption.title || 'Placeholder' }}
        </DropdownLang>
      </article>
      <RFHeading tag="h2">Accordeon Filter</RFHeading>
      <article class="component">
        <AccordeonFilters :options="dataFilters[0]"> </AccordeonFilters>
        <RFHeading tag="h2">DropdownAnalysis</RFHeading>
        <section v-for="item in dropdownAnalysisOptions" :key="item.id">
          <DropdownAnalisys
            :subtitle="item.subtitle"
            :is-effects="item.isEffects"
          >
            {{ item.title }}
          </DropdownAnalisys>
        </section>
      </article>
      <RFHeading tag="h2">Filter Checkbox</RFHeading>
      <article class="component">
        <FilterCheckbox :options="dataCheckboxFilters"> </FilterCheckbox>
        <FilterCheckbox :options="dataRadioFilters"> </FilterCheckbox>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Checkbox – RFCheckbox</RFHeading>
      <article class="component">
        <RFCheckbox id="checkbox" v-model="checkbox"> Check me! </RFCheckbox>
        {{ checkbox }}
        <RFCheckbox id="checkbox2" v-model="checkbox" disabled>
          Check me!
        </RFCheckbox>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Radio – RFRadio</RFHeading>
      <article class="component">
        <RFRadio
          id="radio-1"
          :value="radio.one"
          name="radio"
          @change="radioHandler"
        >
          Check me!
        </RFRadio>
        <RFRadio
          id="radio-2"
          :value="radio.two"
          name="radio"
          @change="radioHandler"
        >
          Check me!
        </RFRadio>
        <RFRadio
          id="radio-3"
          :value="radio.three"
          name="radio"
          disabled
          @change="radioHandler"
        >
          Check me!
        </RFRadio>
        {{ radioPicked }}
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Badge – RFBadge</RFHeading>
      <article class="component">
        <RFBadge> Music </RFBadge>
        <RFBadge with-clear> Music </RFBadge>
        <RFBadge clickable> Click me! </RFBadge>
        <RFBadge variant="count"> 9 </RFBadge>
        <RFBadge variant="success"> success </RFBadge>
        <RFBadge variant="warn"> warn </RFBadge>
        <RFBadge variant="error"> error </RFBadge>
      </article>
      <article class="component">
        <DiscountBage variant="big" :value="20"></DiscountBage>
        <DiscountBage variant="little" :value="50"></DiscountBage>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Toggle – RFToggle</RFHeading>
      <article class="component">
        <RFToggle id="toggle" v-model="toggle" />
        <RFToggle id="toggle-2" v-model="toggle" disabled />
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Lazy Image – RFLazyImage</RFHeading>
      <article class="component">
        <RFLazyImage
          url="https://images.unsplash.com/photo-1632338983477-b0a13e3e6ef8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2382&q=80"
          caption="There is a caption for this image"
        />
        <RFLazyImage
          url="https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80"
          variant="half"
          caption="There is a caption for this image"
        />
        <RFLazyImage
          url="https://images.unsplash.com/photo-1554203623-83684df2e5ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80"
          variant="third"
          caption="There is a caption for this image"
        />
        <RFLazyImage
          url="https://images.unsplash.com/photo-1609048296073-344867b42508?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80"
          variant="quarter"
          caption="There is a caption for this image"
        />
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Select – RFSelect</RFHeading>
      <article class="component">
        <RFSelect :options="selectOptions" @change="selectHandler" />
        {{ selectedOption }}
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Input</RFHeading>
      <section>
        <Input />
      </section>
    </section>

    <section class="card">
      <Search tag="h2">Input Search</Search>
      <section>
        <Search
          :title="title"
          :btn-name="btnName"
          :example="example"
          :text="text"
        />
      </section>
      <RFHeading tag="h2">Анализы и цены</RFHeading>
      <section class="Analyzes">
        <Search
          :title="searchData.title"
          :btn-name="searchData.btnName"
          :example="searchData.example"
          :text="searchData.text"
          :placeholder="searchData.placeholder"
          class="Analyzes-search"
        />
      </section>
    </section>

    <section class="card">
      <RFHeading tag="h2">Card</RFHeading>
      <section>
        <Card />
      </section>
      <RFHeading tag="h2">Banners</RFHeading>
      <section>
        <Banners :banners="banners" />
      </section>
    </section>

    <section class="card">
      <RFHeading tag="h2">Slider Arrows</RFHeading>
      <section>
        <ArrowLeft />
        <ArrowRight :is-active="true" />
      </section>
    </section>

    <section class="card">
      <RFHeading tag="h2">Tabs</RFHeading>
      <article class="component">
        <div class="component-row">
          <div class="component-col component-col--30">
            Type - default, tab type - primary
          </div>
          <div class="component-col component-col--30">
            <Tabs v-model="selectedTab" :tabs="tabs" />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Type - default, tab type - secondary
          </div>
          <div class="component-col component-col--30">
            <Tabs v-model="selectedTab" :tabs="tabs" type-tab="secondary" />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Type - default, tab type - outline-primary
          </div>
          <div class="component-col component-col--30">
            <Tabs
              v-model="selectedTab"
              :tabs="tabs"
              type-tab="outline-primary"
            />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Type - wrap, tab type - disabled
          </div>
          <div class="component-col component-col--30">
            <Tabs
              v-model="selectedTab"
              :tabs="tabs"
              type="wrap"
              type-tab="disabled"
            />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Type - disabled, tab type - disabled-secondary
          </div>
          <div class="component-col component-col--30">
            <Tabs
              v-model="selectedTab"
              :tabs="tabs"
              type="disabled"
              type-tab="disabled-secondary"
            />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Type - wrap, tab type - disabled-tertiary
          </div>
          <div class="component-col component-col--30">
            <Tabs
              v-model="selectedTab"
              :tabs="tabs"
              type="wrap"
              type-tab="disabled-tertiary"
            />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Type - disabled, tab type - disabled-tertiary
          </div>
          <div class="component-col component-col--30">
            <Tabs
              v-model="selectedTab"
              :tabs="tabs"
              type="disabled"
              type-tab="disabled-tertiary"
            />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Type - wrap, tab type - primary
          </div>
          <div class="component-col component-col--30">
            <Tabs
              v-model="selectedTab"
              :tabs="tabs"
              type="wrap"
              type-tab="primary"
            />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Type - wrap, tab type - secondary
          </div>
          <div class="component-col component-col--30">
            <Tabs
              v-model="selectedTab"
              :tabs="tabs"
              type="wrap"
              type-tab="secondary"
            />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Type - wrap, tab type - outline-primary
          </div>
          <div class="component-col component-col--30">
            <Tabs
              v-model="selectedTab"
              :tabs="tabs"
              type="wrap"
              type-tab="outline-primary"
            />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Type - wrap, tab type - quaternary
          </div>
          <div class="component-col component-col--30">
            <Tabs
              v-model="selectedTab"
              :tabs="tabs"
              type="wrap"
              type-tab="quaternary"
            />
          </div>
        </div>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Cards</RFHeading>
      <section>
        <Cards />
      </section>
      <RFHeading tag="h2">Slider-Cards</RFHeading>
      <section>
        <Slider :items="slideCards" />
      </section>
      <RFHeading tag="h2">PromoCards</RFHeading>
      <section>
        <PromoCard :items="promo" />
      </section>
      <RFHeading tag="h2">Management slider</RFHeading>
      <section>
        <ManagementSlider :items="managementData" />
      </section>
    </section>

    <section class="card">
      <RFHeading tag="h2">Tags</RFHeading>
      <article class="component-row">
        <div class="component-col component-col--30">Tag default</div>
        <div class="component-col component-col--30">
          <Tag>Tag</Tag>
        </div>
        <div class="component-col component-col--30">
          <Tag disabled>Tag</Tag>
        </div>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Cards</RFHeading>
      <article class="component">
        <div class="component-row">
          <div class="component-col component-col--30">NewsCardBig</div>
          <div class="component-col component-col--60">
            <NewsCard :news="newsData[0]" />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">NewsCardLittle</div>
          <div class="component-col component-col--60">
            <NewsCard :news="newsData[1]" />
          </div>
        </div>

        <div class="component-row">
          <div class="component-col component-col--30">ArticalBig</div>
          <div class="component-col component-col--60">
            <ArticalCard
              :id="articalData[2].id"
              :link="articalData[2].link"
              :is-big="articalData[2].isBig"
              :title="articalData[2].title"
              :text="articalData[2].text"
            />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">ArticalLittle</div>
          <div class="component-col component-col--60">
            <ArticalCard
              :id="articalData[0].id"
              :link="articalData[0].link"
              :is-big="articalData[0].isBig"
              :title="articalData[0].title"
              :text="articalData[0].text"
            />
          </div>
        </div>

        <div class="component-row">
          <div class="component-col component-col--30">Popular card</div>
          <div class="component-col component-col--60">
            <PopularCard
              :title="popularCard.title"
              :price="popularCard.price"
              :old-price="popularCard.oldPrice"
              :tags="popularCard.tags"
              :is-button="true"
              :is-added="popularCard.added"
              @clicked="popularCard.added = !popularCard.added"
            />
          </div>
        </div>

        <div class="component-row">
          <div class="component-col component-col--30">
            Карта "Анализ и цены"
          </div>
          <div class="component-col component-col--60">
            <AnalyzesCard
              :service="{
                title:
                  'Антитела к бокаловидным клеткам кишечника и антитела к экзокринным клеткам поджелудочной железы',
                old_price: 7800,
                price: 6800,
                tags: [
                  {
                    id: 1,
                    title: 'Доступно с выездом на дом',
                  },
                  {
                    id: 2,
                    title: '1-5 дней',
                  },
                ],
              }"
              is-alert
            />
          </div>
        </div>

        <div class="component-row">
          <div class="component-col component-col--30">
            Service card (клик что бы добавить)
          </div>
          <div class="component-col component-col--60">
            <ServiceCard
              :service="{
                title:
                  'Антитела к бокаловидным клеткам кишечника и антитела к экзокринным клеткам поджелудочной железы',
                old_price: 7800,
                price: 6800,
              }"
              is-alert
            />
          </div>
        </div>

        <div class="component-row">
          <div class="component-col component-col--30">
            Service card, disabled
          </div>
          <div class="component-col component-col--60">
            <ServiceCard
              :service="{
                title:
                  'Антитела к бокаловидным клеткам кишечника и антитела к экзокринным клеткам поджелудочной железы',
                old_price: 7800,
                price: 6800,
              }"
              disabled
              is-close
              is-alert
              is-button
            />
          </div>
        </div>

        <div class="component-row">
          <div class="component-col component-col--30">
            Service card, disabled, recover
          </div>
          <div class="component-col component-col--60">
            <ServiceCard
              :service="{
                title:
                  'Антитела к бокаловидным клеткам кишечника и антитела к экзокринным клеткам поджелудочной железы',
                old_price: 7800,
                price: 6800,
              }"
              disabled
              is-close
              is-alert
              is-recover
            />
          </div>
        </div>

        <div class="component-row">
          <div class="component-col component-col--30">Making Analyzes</div>
          <div class="component-col component-col--60">
            <MakingAnalyzesCard :items="makingInfo" />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Cabinet little card (default)
          </div>
          <div class="component-col component-col--60">
            <CabinetCard :items="cabinetInfo" />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">Cabinet middle card</div>
          <div class="component-col component-col--60">
            <CabinetCard :items="cabinetInfo" :is-middle="true" />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Cabinet full card (клик "выбрать" для записи / клик "выбрать другой"
            для возврата)
          </div>
          <div class="component-col component-col--60">
            <CabinetCard
              :items="cabinetInfo"
              :is-big="true"
              :is-discount="true"
            />
          </div>
        </div>
        <div class="component-row">
          Процедурный кабинет - карточки с адаптивом
          <div class="component-col">
            <WheretoCard
              v-for="item in wheretocardData"
              :key="item"
              :service="item"
            />
          </div>
        </div>
        <div class="component-row">
          <div class="component-col component-col--30">
            Карточка руководства
          </div>
          <div class="component-col component-col--60">
            <ManagementCard
              :title="managementData[0].title"
              :subtitle="managementData[0].subtitle"
              :img="managementData[0].img"
            />
          </div>
          <div class="component-col component-col--30">Полезная информация</div>
          <div class="component-col component-col--60">
            <HelpInfo :items="helpData" />
          </div>
        </div>
      </article>
    </section>

    <section class="card">
      <RFHeading tag="h2">Icons</RFHeading>
      <article class="component">
        <Icons variant="arrowRight" clickable />
        <Icons variant="basket" clickable />
        <Icons variant="bracketDown" />
        <Icons variant="bracketRight" />
        <Icons variant="bus" />
        <Icons variant="calendarBlue" />
        <Icons variant="calendar" />
        <Icons variant="phoneBlue" />
        <Icons variant="checkCircle" />
        <Icons variant="checkMark" />
        <Icons variant="download" clickable />
        <Icons variant="eye" clickable />
        <Icons variant="loop" clickable />
        <Icons variant="mapMarkerBig" />
        <Icons variant="mapMarkerLittle" />
        <Icons variant="person" />
        <Icons variant="print" clickable />
        <Icons variant="kaspiRed" clickable />
        <Icons variant="card-pay" clickable />
        <Icons variant="conditions-disabled" />
        <Icons variant="delete" />
        <Icons variant="close-modal" />
        <Icons variant="virus" clickable />
        <Icons variant="marker" />
        <Icons variant="no-weekends" />
        <Icons variant="no-weekends-blue" clickable />
        <Icons variant="success-green" clickable />
        <Icons variant="error" clickable />
      </article>
      <!-- <article class="component">
        <DiscountBage variant="big" :value="20"></DiscountBage>
        <DiscountBage variant="little" :value="50"></DiscountBage>
      </article> -->
    </section>

    <section class="card">
      <RFHeading tag="h2">Select City</RFHeading>
      <article class="component">
        <section>
          <SelectCity />
        </section>
      </article>
    </section>
    <section class="card">
      <RFHeading tag="h2">Header-Menu</RFHeading>
      <article class="component">
        <HeaderMenu
          :items="headerMenu"
          :options="dropdownLangOptions"
          :select="dropdownSelectedLangOption"
        />
      </article>
    </section>
    <section class="card">
      <RFHeading tag="h2">Header</RFHeading>
      <article class="component">
        <Header />
        <RFHeading tag="h2">Footer</RFHeading>
      </article>
      <article class="component">
        <Footer
          :items="headerMenu"
          :options="dropdownLangOptions"
          :select="dropdownSelectedLangOption"
        />
      </article>
    </section>
    <section class="card">
      <RFHeading tag="h2">News</RFHeading>
      <article class="component">
        <News :news="newsData" />
      </article>
    </section>
    <section class="card">
      <RFHeading tag="h2">Popular</RFHeading>
      <article class="component">
        <Popular :items="popularData" />
      </article>
      <RFHeading tag="h2">Статьи</RFHeading>
      <article class="component">
        <Articals :articals="articalData" />
      </article>
    </section>
    <section class="card">
      <Calculate />
      <ResultsInfo />
    </section>
    <section class="card">
      <ResultsBlanks />
      <BloodAnalysis />
      <AnalysisDynamics />
    </section>
    <section class="card">
      <CalculatorTable />
    </section>
    <section class="card">
      <Map class="map" />
    </section>
    <section class="card bodies">
      <ManBody class="manbody" />
      <WomanBody class="womanbody" />
    </section>
    <section class="card promo">
      <div v-for="item in promocards" :key="item">
        <RFHeading tag="h4"> {{ item.title }} </RFHeading>
        <Promocode
          :description="item.content"
          :btn="item.button"
          :img="item.img"
          :link="item.link"
          class="cards-wrapper__card"
        />
      </div>
    </section>
    <section class="card">
      <Calculator />
      <GetAnalysisInfo />
    </section>
    <section class="card">
      <PressCard />
      <FranchiseStatistics />
    </section>
    <section class="card">
      Discount card:
      <PatientDiscount />
      Application:
      <Application
        :date="application.date"
        :number="application.number"
        :name="application.name"
        :price="application.price"
      />
    </section>
    <section class="card"><ResultsSearch /></section>
    <section class="card">
      <SalesCard
        :period="salesCard.period"
        :old-price="salesCard.oldPrice"
        :current-price="salesCard.currentPrice"
      />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import RFLogo from 'atoms/RFLogo/index.vue'
import RFHeading from 'atoms/RFHeading/index.vue'
import RFText from 'atoms/RFText/index.vue'
import RFButton from 'atoms/RFButton/index.vue'
import RFInput from 'atoms/RFInput/index.vue'
import RFCheckbox from 'atoms/RFCheckbox/index.vue'
import RFRadio from 'atoms/RFRadio/index.vue'
import RFBadge from 'atoms/RFBadge/index.vue'
import RFToggle from 'atoms/RFToggle/index.vue'
import ButtonBase from 'atoms/Button/index.vue'
import ButtonTo from 'atoms/Button/ButtonTo/index.vue'
import RFLazyImage from 'atoms/RFLazyImage/index.vue'
import RFSelect from 'molecules/RFSelect/index.vue'
import ButtonCart from 'molecules/ButtonCart/index.vue'
import Search from 'molecules/Search/index.vue'
import Card from 'molecules/Cards/BannerCard/index.vue'
import Input from 'atoms/Input/index.vue'
import ArrowLeft from 'atoms/ArrowLeft/index.vue'
import ArrowRight from 'atoms/ArrowRight/index.vue'
import DropdownBase from 'atoms/Dropdown/index.vue'
import Tabs from 'molecules/Tabs/index.vue'
import Cards from 'molecules/Cards/ServiceCard/CurrentCard/index.vue'
import Tag from 'atoms/Tag/index.vue'
import PopularCard from 'molecules/Cards/PopularCard/index.vue'
import ServiceCard from 'molecules/Cards/ServiceCard/index.vue'
import SelectCity from 'molecules/SelectCity/index.vue'
import Slider from 'organisms/Slider/ActualSlider/index.vue'
import BackLink from 'atoms/Button/ButtonBack/index.vue'
import DiscountBage from 'atoms/RFBadge/Discount/index.vue'
import DropdownLang from 'atoms/Dropdown/DropdownLang/index.vue'
import Icons from 'atoms/Icons/index.vue'
import DataInput from 'atoms/RFInput/DataInput/index.vue'
import HeaderMenu from 'molecules/Header/HeaderMenu/index.vue'
import Header from 'organisms/Header/index.vue'
import DropdownAnalisys from 'atoms/Accordeon/AccordeonAnalisys/index.vue'
import Banners from 'organisms/Banners/index.vue'
import AccordeonFilters from 'molecules/Accordeon/Filters/index.vue'
import MakingAnalyzesCard from 'molecules/Cards/MakingAnalyzesCard/index.vue'
import CabinetCard from 'molecules/Cards/CabinetCard/index.vue'
import Footer from 'molecules/Footer/index.vue'
import PromoCard from 'molecules/Cards/PromoCard/index.vue'
import NewsCard from 'molecules/Cards/NewsCard/index.vue'
import News from 'organisms/News/index.vue'
import ArticalCard from 'molecules/Cards/ArticalCard/index.vue'
import Articals from 'organisms/Articals/index.vue'
import FilterCheckbox from 'molecules/Accordeon/FilterCheckbox/index.vue'
import ManagementCard from 'molecules/Cards/ManagementCard/index.vue'
import ManagementSlider from 'organisms/Slider/ManagementSlider/index.vue'
import Popular from 'organisms/Popular/index.vue'
import HelpInfo from 'molecules/HelpInfo/index.vue'
import AnalyzesCard from 'molecules/Cards/AnalyzesCard/index.vue'
import InputAdditional from 'molecules/InputAdditional/index.vue'
import Calculate from 'molecules/Cards/Calculate/index.vue'
import ResultsInfo from 'molecules/ResultsInfo/index.vue'
import ResultsBlanks from 'molecules/Cards/ResultsBlanks/index.vue'
import BloodAnalysis from 'molecules/Cards/BloodAnalysis/index.vue'
import Map from 'organisms/Map/YandexMap/index.vue'
import WheretoCard from 'molecules/Cards/WheretoCard/index.vue'
import WomanBody from 'molecules/WomanBody/index.vue'
import ManBody from 'molecules/ManBody/index.vue'
import Promocode from 'molecules/Cards/Promocode/index.vue'
import Calculator from 'molecules/Calculator/index.vue'
import GetAnalysisInfo from 'molecules/Cards/AnalyzesCard/GetAnalysisInfo/index.vue'
import PressCard from 'molecules/Cards/PressCard/index.vue'
import AnalysisDynamics from 'molecules/Cards/AnalysisDynamics/index.vue'
import CalculatorTable from 'molecules/Calculator/Table/index.vue'
import FranchiseStatistics from 'molecules/Cards/FranchiseStatistics/index.vue'
import PatientDiscount from 'molecules/Cards/PatientDiscount/index.vue'
import Application from 'molecules/Cards/DiscountCard/Application/index.vue'
import ResultsSearch from 'molecules/Cards/ResultsSearch/index.vue'
import SalesCard from 'molecules/Cards/SalesCard/index.vue'
/**
 * 'PAGES/UI'
 * @displayName UI
 */
export default Vue.extend({
  name: 'UI',
  components: {
    RFLogo,
    RFHeading,
    RFText,
    RFButton,
    RFInput,
    RFCheckbox,
    RFRadio,
    RFBadge,
    RFToggle,
    RFLazyImage,
    RFSelect,
    ButtonBase,
    ButtonCart,
    Search,
    Card,
    Input,
    ArrowLeft,
    ArrowRight,
    DropdownBase,
    Tabs,
    Cards,
    Tag,
    PopularCard,
    ServiceCard,
    DropdownLang,
    BackLink,
    DiscountBage,
    Icons,
    SelectCity,
    Slider,
    DataInput,
    HeaderMenu,
    Header,
    DropdownAnalisys,
    Banners,
    AccordeonFilters,
    MakingAnalyzesCard,
    Footer,
    CabinetCard,
    PromoCard,
    NewsCard,
    News,
    ButtonTo,
    FilterCheckbox,
    Popular,
    HelpInfo,
    Articals,
    ArticalCard,
    ManagementCard,
    ManagementSlider,
    AnalyzesCard,
    InputAdditional,
    Calculate,
    ResultsInfo,
    ResultsBlanks,
    BloodAnalysis,
    Map,
    WheretoCard,
    WomanBody,
    ManBody,
    Promocode,
    Calculator,
    GetAnalysisInfo,
    PressCard,
    AnalysisDynamics,
    CalculatorTable,
    FranchiseStatistics,
    PatientDiscount,
    Application,
    ResultsSearch,
    SalesCard,
  },
  data() {
    return {
      salesCard: {
        oldPrice: '5200',
        currentPrice: '4000',
        period: ' 1-8 дней',
      },
      popularCard: {
        id: 1,
        title: 'Витаминые микроэлементы',
        tags: [
          { id: 1, name: '1 день' },
          { id: 2, name: 'Доступно с выездом на дом' },
        ],
        oldPrice: '7800',
        price: '5600',
        added: false,
      },
      application: {
        date: '15 декабря',
        number: 97000003,
        name: 'Алексеев Дмитрий Алексеевич',
        price: 2400,
      },
      wheretocardData: [
        {
          id: 1,
          title: 'Процедурный кабинет "Нурлы Тау"',
          status: '10% cкидка c 10.02. по 10.03.2021',
          address: 'пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress1: 'г. Алматы, пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress2:
            'БЦ "Нурлы-Тау", ЖК "Orion Residence", Остановка ТЦ Рамстор, Желтоксан (пр. Аль-Фараби)',
          bus: 'Автобусы №: 63, 127, 86, 38, 62, 2, 48',
          phone: '259-69-79 ',
          take: 'Приём анализов:',
          get: 'Выдача результатов:',
          weekdays: 'Пн-Пт',
          weekend1: 'Сб',
          weekend2: 'Вс',
          weekdaysTimetake: '08:00 - 12:00',
          weekdaysTimeget: '10:00 - 13:00',
          weekend1Timetake: '08:00 - 12:00',
          weekend1Timeget: '10:00 - 13:00',
          weekend2Time: 'Выходной',
          weekend2Timetake: '08:00 - 12:00',
          weekend2Timeget: '10:00 - 13:00',
          break: 'Перерыв:',
          breakTimeWeekdays: '11:30 - 12:00',
          breakTimeWeekend: '11:30 - 12:00',
        },
        {
          id: 1,
          title: 'Процедурный кабинет "Нурлы Тау"',
          status: 'Временно не работает',
          address: 'пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress1: 'г. Алматы, пр. Аль-Фараби, 9, блок 5 Г',
          fullAddress2:
            'БЦ "Нурлы-Тау", ЖК "Orion Residence", Остановка ТЦ Рамстор, Желтоксан (пр. Аль-Фараби)',
          bus: 'Автобусы №: 63, 127, 86, 38, 62, 2, 48',
          phone: '259-69-79 ',
          take: 'Приём анализов:',
          get: 'Выдача результатов:',
          weekdays: 'Пн-Пт',
          weekend1: 'Сб',
          weekend2: 'Вс',
          weekdaysTimetake: '08:00 - 12:00',
          weekdaysTimeget: '10:00 - 13:00',
          weekend1Timetake: '08:00 - 12:00',
          weekend1Timeget: '10:00 - 13:00',
          weekend2Time: 'Выходной',
          weekend2Timetake: '08:00 - 12:00',
          weekend2Timeget: '10:00 - 13:00',
          break: 'Перерыв:',
          breakTimeWeekdays: '11:30 - 12:00',
          breakTimeWeekend: '11:30 - 12:00',
        },
      ],
      label: 'Кол-во рабочих дней в месяце',
      promocards: [
        {
          title: 'Промо-код',
          img: 'promocode.png',
          content:
            'В сети клинико-диагностических лабораторий ОЛИМП действует система промо-кодов позволяющих производить процедуры со скидкой.',
          button: 'Как получить промо-код',
          link: 'promotions/promocodes',
        },
        {
          title: 'Сертификаты',
          img: 'certificate.png',
          content:
            'Вы можете приобрести сертификаты на любую сумму для подарка близким.',
          button: 'Преобрести сертификат',
          link: '/promotions/certificates',
        },
      ],
      variable: 'дней',
      input: '',
      checkbox: false,
      toggle: false,
      radio: {
        one: 'Hi',
        two: 'Bye',
        three: 'Oops',
      },
      radioPicked: '',
      selectOptions: [
        {
          value: 1,
          option: 'first option',
        },
        {
          value: 2,
          option: 'second option',
        },
        {
          value: 3,
          option: 'third option',
        },
      ],
      selectedOption: 0,
      title: 'Клинико-диагностические лаборатории ОЛИМП',
      btnName: 'Найти',
      example: 'Например,',
      text: 'тест на COVID',
      dropdownSelectedOption: {},
      dropdownOptions: [
        { id: 1, title: 'Option 1' },
        { id: 2, title: 'Option 2' },
        { id: 3, title: 'Option 3' },
      ],
      dropdownSelectedLangOption: { title: 'RU' },
      dropdownLangOptions: [
        { id: 1, title: 'RU' },
        { id: 2, title: 'QQ' },
        { id: 3, title: 'EN' },
      ],
      dataFilters: [
        {
          id: 1,
          title: 'Анализы',
          links: [
            {
              id: 1,
              title: 'Covid-19',
            },
            {
              id: 2,
              title: 'Клинический анализ крови',
            },
            {
              id: 3,
              title: 'Биохимические иследования',
              submenu: [
                {
                  id: 1,
                  title: 'first',
                },
                {
                  id: 2,
                  title: 'second',
                },
                {
                  id: 3,
                  title: 'another',
                },
              ],
            },
            {
              id: 4,
              title: 'Аллергические исследования',
            },
          ],
        },
        {
          id: 2,
          title: 'Профили',
          links: [
            {
              id: 1,
              title: 'Covid-19',
            },
            {
              id: 2,
              title: 'Клинический анализ крови',
            },
            {
              id: 3,
              title: 'Биохимические иследования',
              subtitle: [
                {
                  id: 1,
                  title: 'first',
                },
                {
                  id: 2,
                  title: 'second',
                },
                {
                  id: 3,
                  title: 'another',
                },
              ],
            },
            {
              id: 4,
              title: 'Аллергические исследования',
            },
          ],
        },
      ],
      dataCheckboxFilters: {
        id: 1,
        title: 'Фильтры для поиска',
        isCheckbox: true,
        links: [
          {
            id: 1,
            title: 'Оплата банковской картой',
          },
          {
            id: 2,
            title: 'Работа без выходных',
          },
          {
            id: 3,
            title: 'Условия для инвалидов',
          },
          {
            id: 4,
            title: 'Скидка на услуги',
          },
        ],
      },
      dataRadioFilters: {
        id: 1,
        title: 'Отдельные виды анализов',
        isCheckbox: false,
        links: [
          {
            id: 100,
            title: 'Забор крови на биохимию, иммунохимию, ИФА, ПЦР',
          },
          {
            id: 101,
            title: 'Забор крови на общий анализ (ОАК), электролиты, АКТГ',
          },
          {
            id: 102,
            title: 'Забор крови на гемостаз',
          },
          {
            id: 103,
            title: 'Забор гинекологических мазков',
          },
          {
            id: 104,
            title: 'Забор мочи',
          },
          {
            id: 105,
            title: 'Забор ПЦР на COVID-19',
          },
          {
            id: 106,
            title: 'ПЦР на ИППП "день в день"',
          },
          {
            id: 107,
            title: 'Спермограмма',
          },
          {
            id: 108,
            title: 'Забор кала',
          },
          {
            id: 109,
            title: 'УЗИ-диагностика',
          },
          {
            id: 110,
            title: 'ЭКГ, Холтер, СМАД',
          },
          {
            id: 111,
            title: 'Внутривенное введение капельно (система), струйно',
          },
          {
            id: 112,
            title: 'Внутримышечная инъекция',
          },
          {
            id: 113,
            title: 'Прием гинеколога',
          },
        ],
      },
      dropdownAnalysisOptions: [
        {
          id: 1,
          isEffects: false,
          title: 'Мочевая кислота',
          subtitle: [
            {
              text: 'Потенциальный франчайзи выбирает помещение, расположенное не менее одного километра от другого процедурного кабинета под брендом КДЛ ОЛИМП. Расстояние замеряется по прямой линии. Помещение должно соответствовать санитарным нормам и нормам КДЛ ОЛИМП. Стандарты помещений доступны по ссылке.',
            },
          ],
        },
        {
          id: 2,
          isEffects: true,
          title: 'Мочевая кислота',
          subtitle: [
            {
              text: 'Для остальных возрастов — за 8-12 часов (12 часов для исследований липидного спектра) до чяавзятия крови.',
            },
            {
              text: 'Для остальных возрастов — за 8-12 часов (12 часов для исследований липидного спектра) до чяавзятия крови.',
            },
            {
              text: 'Для остальных возрастов — за 8-12 часов (12 часов для исследований липидного спектра) до чяавзятия крови.',
            },
            {
              text: 'Для остальных возрастов — за 8-12 часов (12 часов для исследований липидного спектра) до чяавзятия крови.',
            },
          ],
        },
      ],
      selectedTab: 1,
      tabs: [
        { id: 1, title: 'Tab 1' },
        { id: 2, title: 'Tab 2' },
        { id: 3, title: 'Tab 3' },
      ],
      headerMenu: [
        {
          id: 1,
          title: 'Акции',
          link: '/',
        },
        {
          id: 2,
          title: 'Анализы и цены',
          link: '/analyzes',
        },
        {
          id: 3,
          title: 'Где сдать?',
          link: '/where-to-take-tests',
        },
        {
          id: 4,
          title: 'Выезд на дом',
          link: '/',
        },
        {
          id: 5,
          title: 'О нас',
          link: '/about',
        },
        {
          id: 6,
          title: 'Франшиза',
          link: '/franchise',
        },
        {
          id: 7,
          title: 'Контакты',
          link: '/',
        },
      ],
      banners: [
        {
          id: 1,
          img: 'banner-card-big.png',
          title: 'Услуга "Выезд на дом"',
          subtitle: 'Сдавайте анализы где вам удобно',
          link: '/',
        },
        {
          id: 2,
          img: 'banner-card.png',
          title: 'Анализы и цены',
          link: '/analyzes',
        },
        {
          id: 3,
          img: 'banner-card2.png',
          title: 'Профили',
          link: '/analyzes',
        },
        {
          id: 4,
          img: 'banner-card3.png',
          title: 'Медицинские услуги',
          link: '/',
        },
        {
          id: 5,
          img: 'banner-card4.png',
          title: 'Выбираю сам',
          link: '/choose-myself',
        },
      ],
      slideCards: [
        {
          id: 1,
          title: 'Хеликобактер пилори. 14С-уреазный дыхательный тест',
          oldPrice: '8000',
          price: '5600',
          date: '1 мая - 31 мая',
          img: 'helicobacter.png',
        },
        {
          id: 2,
          title: 'Квантифероновый тест',
          oldPrice: '19800',
          price: '14000',
          date: '1 мая - 31 мая',
          img: 'helicobacter-4.png',
          color:
            'radial-gradient(125.12% 191.76% at 91.55% 116.59%, #92CA5B 0%, #C9FD96 33.65%, #92CA5B 100%)',
        },
        {
          id: 3,
          title: 'ПЦР тест на COVID-19 для детей',
          oldPrice: '19800',
          price: '14000',
          date: '1 мая - 31 мая',
          img: 'helicobacter-3.png',
          color: 'linear-gradient(99.71deg, #FD9DA0 7.68%, #FEAFA1 57.06%)',
        },
        {
          id: 4,
          title: 'ПЦР тест на COVID 19',
          oldPrice: '19800',
          price: '14000',
          date: '1 мая - 31 мая',
          img: 'helicobacter-2.png',
          color: 'linear-gradient(99.71deg, #C93CA2 7.68%, #FF8686 57.06%)',
        },
      ],
      promo: [
        {
          id: 1,
          data: '11 марта',
          isPromo: false,
          title: 'Акция марта! Профиль щитовидная железа',
        },
        {
          id: 2,
          data: '12 марта',
          isPromo: true,
          title: 'Акция марта! Профиль щитовидная железа',
        },
      ],
      makingInfo: [
        {
          id: 1,
          title: 'ПЦР анализ на коронавирус',
          discount: 10,
          oldPrice: '7000',
          price: '6300',
          data: '02.04.2022',
          active: true,
          disabled: false,
        },
        {
          id: 2,
          title: 'Анализ на суммарные антитела к коронавирусу ЭХЛ методом',
          discount: 10,
          oldPrice: '5000',
          price: '4300',
          data: '02.04.2022',
          active: false,
          disabled: false,
        },
        {
          id: 3,
          title: 'Анализ на суммарные антитела к коронавирусу ЭХЛ методом',
          discount: 10,
          oldPrice: '5000',
          price: '4300',
          data: '02.04.2022',
          active: false,
          disabled: true,
        },
      ],
      cabinetInfo: [
        {
          id: 1,
          title: 'Процедурный кабинет КДЛ "ОЛИМП"',
          address: 'пр. Аль-Фараби, 9, блок 5 Г',
          tel: '259-69-79',
          worktime: {
            weekdays: 'Пн- Пт: 08:00 - 15:00',
            weekend: 'Сб- Вс: 08:00 - 13:00',
          },
          tags: {
            1: 'Без выходных',
            2: 'Работает в праздничные дни',
          },
          discount: '10% скидка с 10.02 пл 10.03.22',
          isDiscount: true,
          icons: {
            1: 'no-weekends',
            2: 'card-pay',
            3: 'virus',
            4: 'kaspi-red',
          },
        },
      ],
      searchData: {
        title: 'Анализы и цены',
        btnName: 'Найти',
        example: 'Поиск услуг и аналитиков',
        text: '',
        placeholder: 'Поиск услуг и анализов',
      },
      newsData: [
        {
          id: 1,
          title:
            ' в процедурных кабинетах КДЛ ОЛИМП в городах Алматы и Талдыкурган',
          text: 'Говоря медицинским языком: «почки – это парный орган, основное назначение которого – очистка крови и выведение из организма продуктов обмена веществ». Иными словами почки это фильтр нашего организма...',
          discount: 'Скидка 15%',
          link: '/news/news-item',
          isBig: true,
          date: '1 июня',
          tag: '',
        },
        {
          id: 2,
          title:
            'АКЦИЯ! 1 960 тенге анализ на суммарные антитела к коронавирусу ЭХЛ методом',
          text: 'Говоря медицинским языком: «почки – это парный орган, основное назначение которого – очистка крови и выведение из организма продуктов обмена веществ». Иными словами почки это фильтр нашего организма...',
          discount: 'Скидка 15%',
          link: '/news/news-item',
          isBig: false,
          date: '24 мая',
          tag: '',
        },
        {
          id: 3,
          title: 'Услуга самозабора на ПЦР в КДЛ ОЛИМП',
          text: 'Говоря медицинским языком: «почки – это парный орган, основное назначение которого – очистка крови и выведение из организма продуктов обмена веществ». Иными словами почки это фильтр нашего организма...',
          discount: 'Скидка 15%',
          link: '/news/news-item',
          isBig: false,
          date: '20 февраля',
          tag: '',
        },
      ],
      popularData: [
        {
          id: 1,
          title: 'Анализы',
          data: [
            {
              id: 1,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
                { id: 3, name: '1 день' },
              ],
              price: '5 600',
            },
            {
              id: 2,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
                { id: 3, name: '1 день' },
              ],
              price: '7 200',
            },
            {
              id: 3,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
                { id: 3, name: '1 день' },
              ],
              price: '12 600',
            },
            {
              id: 4,
              title: 'Витаминые микроэлементы',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
                { id: 3, name: '1 день' },
              ],
              price: '15 600',
            },
          ],
        },
        {
          id: 2,
          title: 'Профили',
          data: [
            {
              id: 1,
              title: 'Профиль 1',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
              ],
              price: '5 600',
            },
            {
              id: 2,
              title: 'Профиль 2',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
                { id: 3, name: '1 день' },
              ],
              price: '15 600',
            },
            {
              id: 3,
              title: 'Профиль 3',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
                { id: 3, name: '1 день' },
              ],
              price: '25 600',
            },
            {
              id: 4,
              title: 'Профиль 4',
              tags: [
                { id: 1, name: '1 день' },
                { id: 2, name: 'Доступно с выездом на дом' },
                { id: 3, name: '1 день' },
              ],
              price: '35 600',
            },
          ],
        },
      ],
      helpData: [
        {
          id: 1,
          title: 'Подготовка к анализам',
          icon: 'rectangle-blue',
          link: '#',
        },
        {
          id: 2,
          title: 'Дисконтная система',
          icon: 'discount-blue',
          link: '#',
        },
        {
          id: 3,
          title: 'Информированное согласие',
          icon: 'check-blue',
          link: '#',
        },
        {
          id: 4,
          title: 'Публичный договор',
          icon: 'document-blue',
          link: '#',
        },
      ],
      articalData: [
        {
          id: 1,
          title: 'Новые технологии в пренатальной диагностике',
          text: 'Известно ли Вам, что 21 марта это Международный день человека с синдромом Дауна? День выбран не случайно, ведь...',
          link: '/articles/article',
          isBig: false,
        },
        {
          id: 2,
          title: 'Уверены ли вы в здоровье своих почек?',
          text: 'Говоря медицинским языком: «почки – это парный орган, основное назначение которого – очистка крови и выведение из организма продуктов обмена веществ». Иными слов...',
          discount: 'Скидка 15%',
          link: '/articles/article',
          isBig: false,
        },
        {
          id: 5,
          title:
            'Инновация в КДЛ «ОЛИМП»! ISAC - комплексный тест на одновременную диагностику 112-ти аллергенов!',
          text: 'Аллергия – это бич современного общества, ведь по статистике около 20% населения нашей планеты...',
          discount: 'Скидка 15%',
          link: '/articles/article',
          isBig: true,
        },
        {
          id: 6,
          title: '21 марта это Международный день человека с Синдромом Дауна',
          text: 'Известно ли Вам, что 21 марта это Международный день человека с синдромом Дауна? День выбран не случайно, ведь...',
          discount: 'Скидка 15%',
          link: '/articles/article',
          isBig: false,
        },
        {
          id: 3,
          title: 'Говоря медицинским языком: «почки – это парный орган',
          text: 'Основное назначение которого – очистка крови и выведение из организма продуктов обмена веществ»',
          link: '/articles/article',
          isBig: false,
        },
      ],
      managementData: [
        {
          id: 1,
          title: 'Ерлан Мельсович Сулейменов',
          subtitle: 'Генеральный директор',
          img: 'Erlan.png',
        },
        {
          id: 2,
          title: 'Алексей Николаевич Балась',
          subtitle: 'Директор по маркетингу и инновациям',
          img: 'Alexey.png',
        },
        {
          id: 3,
          title: 'Лариса Станиславовна Мильто',
          subtitle: 'Руководитель службы внутреннего аудита',
          img: 'Larissa.png',
        },
        {
          id: 4,
          title: 'Марат Тулеутаевич Мурзахметов',
          subtitle: 'Технический директор',
          img: 'Marat.png',
        },
        {
          id: 5,
          title: 'Марат Тулеутаевич Мурзахметов',
          subtitle: 'Технический директор',
          img: 'Marat.png',
        },
        {
          id: 5,
          title: 'Марат Тулеутаевич Мурзахметов',
          subtitle: 'Технический директор',
          img: 'Marat.png',
        },
      ],
    }
  },
  head: {
    title: 'Rocket Firm UI',
  },
  methods: {
    radioHandler(v: string) {
      this.radioPicked = v
    },
    selectHandler(e: number) {
      this.selectedOption = e
    },
  },
})
</script>

<style lang="scss" scoped>
.card.promo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  @include tablet {
    flex-direction: column;
  }
  &__card {
    width: 100%;
  }
  h4.rf-heading {
    margin: 0 0 24px;
    @include font-size(28px, 34px, 400);
  }
}
.bodies {
  position: relative;
  height: 50rem;
  display: flex;
  gap: 30px;
  .manbody {
    top: -4em;
    left: 20rem;
  }
  .womanbody {
    top: -4em;
    left: 50rem;
  }
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  img {
    display: block;
    width: 120px;
    height: auto;
  }
}

.board {
  width: 100%;
  height: 100%;
  background-color: $c-secondary;
  padding: 20px 25px 100px;
}
.card {
  width: 100%;
  padding: 50px;
  background-color: #fff;
  border-radius: 12px;
  margin-bottom: 25px;
}
.component {
  width: 100%;
  border-radius: 10px;
  padding: 25px 35px;
  border: 1px solid rgba($c-secondary, 0.25);
  &-row {
    display: flex;
    align-items: center;
    border-bottom: 1px dashed rgba($color: $c-text, $alpha: 0.5);
    margin: 15px 0;
    padding: 10px 0;
  }
  &-col {
    &--30 {
      width: 30%;
    }
    &--60 {
      width: 60%;
    }
  }
}
.map.ymap-container {
  width: 100%;
  height: 384px;
  margin-bottom: 46px;
}
// ----------------- Стили "Анализы и цены" searchInput ---------------

::v-deep {
  .Analyzes {
    max-width: 1440px;
    background-color: $c-blue;
    &-search {
      max-width: 1440px;
      height: 356px;
      width: 100%;
      padding: 80px 0 80px 50px;
      @include bg-size('~assets/images/microscope.png', 45%, 105% 50%);
      > h2 {
        margin-top: 0;
        @include font-size(56px, 62px, 500);
      }

      .container__search {
        > input {
          max-width: 630px;
          height: 64px;
          width: 100%;
          background-color: $c-white;
          @include font-size(24px, 32px);
        }

        &-btn {
          width: 158px;
          height: 64px;
          @include font-size(24px, 30px);
        }
      }
    }
  }
}

// ----------------- /Стили "Анализы и цены" searchInput ---------------
</style>
