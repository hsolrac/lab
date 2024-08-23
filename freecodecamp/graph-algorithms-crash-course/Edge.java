public class Edge {
  private Vertex start; 
  private Vertex end; 
  private Integer weight; 

  public Edge(Vertex startV, Vertex endV, Integer inputWeigth) {
    this.start = startV; 
    this.end = endV;
    this.weight = inputWeigth;
  }

  public Vertex getStart() {
    return this.start; 
  }

  public Vertex getEnd() {
    return this.end; 
  }

  public Integer getWeith() {
    return this.inputWeigth; 
  }
}
