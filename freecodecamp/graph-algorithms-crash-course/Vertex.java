import java.util.ArrayList;

public class Vertex {
  private String data;
  private ArrayList<Edge> edgs;

  public Vertex(String inputData){
    this.edgs = new ArrayList<Edge>();
    this.data = inputData;
  }

  public addEdge(Vertex endVertex, Integer weigth) {
    this.edgs.add(new Edge(this, endVertex, weigth));
  }

  public void removeEdge(Vertex endVertex) {
    this.edgs.removeIf(edge -> edge.getEnd().equals(endVertex));
  }

  public String getData() {
    return this.data; 
  }

  public ArrayList<Edge> getEdges() {
    return this.edges;
  }

  public void print(boolean showWeigth) {
    String message = "";

    if (this.edges.size() == 0) {
      System.out.println(this.data + " -->")
      return;
    }

    for(int i = 0; i < this.edges.size(); i++) {
      if (i == 0) {
        message += this.edges.get(i).getStart().data + " -->  ";
      }

      message += this.edges.get(i).getStart().data;

      if(showWeigth) {
        message += " (" + this.edges.get(i).getWeigth() + ")";
      }

      if(i != this.edges.size() - 1) {
        message += ", ";
      }
    }

    System.out.println(message);
  }

  public static void main(String[] args)  {
  }
}
