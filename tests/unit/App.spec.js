import { shallowMount } from '@vue/test-utils'

import App from '@/App'
import MovieList from '@/components/MovieList'
import Search from '@/components/Search'

describe('App', () => {

  it('should receive emitted args and update data', () => {
    const app = shallowMount(App)
    expect(app.vm.movies).toEqual([])

    const movies = ['Kingsman: The Secret Service', 'Kingsman: The Golden Circle']
    const search = app.find(Search)
    search.vm.$emit('search', movies)

    expect(app.vm.movies).toEqual(movies)
  })

  it('Should pass the movies prop to MovieList', () => {
    const wrapper = shallowMount(App)

    const movieList = wrapper.find(MovieList)
    expect(movieList.props().movies).toBe(wrapper.vm.movies)

  })
})
