import { Context } from '@nuxt/types'
import Mock from './Mock/index'
import Sales, { ISalesRepository } from './sales'
import AnalysisPrepInfo, {
  IAnalysisPrepInfoRepository,
} from './AnalysisPrepInfo'
import AnalysisPrepare, { IAnalysisPrepareRepository } from './prepare'
import DiscountSystem, { IDiscountSystemRepository } from './discount'
import Certificate, { ICertificateRepository } from './certificate'
import News, { INewsRepository } from './news'
import Contact, { IContactRepository } from './contact'
import About, { IAboutRepository } from './about'
import Responsibility, { IResponsibilityRepository } from './responsibility'
import Licence, { ILicenceRepository } from './licence'
import Promocode, { IPromocodeRepository } from './promocode'
import Partners, { IPartnersRepository } from './partners'
import Terms, { ITermsRepository } from './terms'
import Document, { IDocumentRepository } from './document'
import Handbooks, { IHandbooksRepository } from './handbooks'
import Leadership, { ILeadershipRepository } from './leadership'
import InfectiousDisease, {
  IInfectiousDiseaseRepository,
} from './infectiousDisease'
import Equipment, { IEquipmentRepository } from './equipment'
import Pages, { IPagesRepository } from './pages'

export type repositoriesType = {
  mock: Mock
  discountSystem: IDiscountSystemRepository
  certificate: ICertificateRepository
  news: INewsRepository
  analysisPrepInfo: IAnalysisPrepInfoRepository
  analysisPrepare: IAnalysisPrepareRepository
  contact: IContactRepository
  about: IAboutRepository
  responsibility: IResponsibilityRepository
  licence: ILicenceRepository
  promocode: IPromocodeRepository
  partners: IPartnersRepository
  terms: ITermsRepository
  document: IDocumentRepository
  handbooks: IHandbooksRepository
  leadership: ILeadershipRepository
  infectiousDisease: IInfectiousDiseaseRepository
  equipment: IEquipmentRepository
  pages: IPagesRepository
  sales: ISalesRepository
}

const repositories = (ctx: Context): repositoriesType => ({
  mock: new Mock(ctx.$services.common.http),
  sales: new Sales(ctx.$services.common.http),
  analysisPrepInfo: new AnalysisPrepInfo(ctx.$services.common.http),
  analysisPrepare: new AnalysisPrepare(ctx.$services.common.http),
  discountSystem: new DiscountSystem(ctx.$services.common.http),
  certificate: new Certificate(ctx.$services.common.http),
  news: new News(ctx.$services.common.http),
  contact: new Contact(ctx.$services.common.http),
  about: new About(ctx.$services.common.http),
  responsibility: new Responsibility(ctx.$services.common.http),
  licence: new Licence(ctx.$services.common.http),
  promocode: new Promocode(ctx.$services.common.http),
  partners: new Partners(ctx.$services.common.http),
  terms: new Terms(ctx.$services.common.http),
  document: new Document(ctx.$services.common.http),
  handbooks: new Handbooks(ctx.$services.common.http),
  leadership: new Leadership(ctx.$services.common.http),
  infectiousDisease: new InfectiousDisease(ctx.$services.common.http),
  equipment: new Equipment(ctx.$services.common.http),
  pages: new Pages(ctx.$services.common.http),
})

export default repositories
